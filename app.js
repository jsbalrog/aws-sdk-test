var AWS = require('aws-sdk');

// AWS.config.region = 'us-west-1';
var s3 = new AWS.S3();

s3.listBuckets(function(err, data) {
  for(var index in data.Buckets) {
    var bucket = data.Buckets[index];
    console.log("Bucket: " , bucket.Name, ': ', bucket.CreationDate);
  }
});

var params = { Bucket: 'teds-test-bucket', Key: 'gandalf lotr macbook apple.jpg' };
var file = require('fs').createWriteStream('/Users/gandalf/dev/amazon-sdk-test/image.jpg');
s3.getObject(params).createReadStream().pipe(file);
