rm function.zip
zip function.zip index.js

aws cloudformation update-stack \
  --stack-name rant-lambda-stack \
  --template-body file://templates/main-template.yaml \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameters ParameterKey=S3Bucket,ParameterValue=rant-aws-sample \
               ParameterKey=S3Key,ParameterValue=function.zip

rm function.zip