if [ $? -eq 0 ]; then
          STATUS="SUCCESS"
        else
          STATUS="FAILED"
        fi
        - echo "Fetching Slack Webhook URL from Secrets Manager..."
        - SLACK_WEBHOOK_URL=$(aws secretsmanager get-secret-value --secret-id SlackWebHookURL --query SecretString --output text)
        - echo "Sending notification to Slack..."
        - echo "Webhook URL: $SLACK_WEBHOOK_URL"
        - curl -X POST -H 'Content-type: application/json' --data "{\"text\":\"Integration Tests ${STATUS}!\"}" $SLACK_WEBHOOK_URL