import { useState, useEffect } from "react"
// import AWS from "aws-sdk"

const AWS = window.AWS

const listAllObjects = (s3, params) => {
  return s3
    .listObjectsV2(params)
    .promise()
    .then(({ Contents, IsTruncated, NextContinuationToken }) => {
      return IsTruncated && NextContinuationToken
        ? listAllObjects(
            s3,
            Object.assign({}, params, {
              ContinuationToken: NextContinuationToken,
            })
          ).then((x) => Contents.concat(x))
        : Contents
    })
}

export const useAWS = () => {
  AWS.config.update({
    accessKeyId: "ACCESSKEY",
    secretAccessKey: "SECRETKEY",
    region: "us-east-1",
  })
  const s3 = new AWS.S3()
  const sqs = new AWS.SQS({ apiVersion: "2012-11-05" })

  const listImages = (clientId, callback) => {
    const params = {
      Bucket: "savyart",
      Prefix: `${clientId}/`,
    }

    listAllObjects(s3, params).then((Contents) => {
      const images = Contents.map((file) => ({
        name: file.Key.split("/").at(-1),
        src: `https://savyart.s3.amazonaws.com/${file.Key}`,
        selected: false,
      }))
      callback(images)
    })
  }

  const sendSQSMessage = (body) => {
    var params = {
      MessageBody: JSON.stringify(body),
      QueueUrl:
        "https://sqs.us-east-1.amazonaws.com/891377393267/process-client-selected-photos",
    }

    sqs.sendMessage(params, function (err, data) {
      if (err) {
        console.log("Error", err)
      } else {
        console.log("Success", data.MessageId)
      }
    })
  }
  return { listImages, sendSQSMessage }
}
