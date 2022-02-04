
# The command

```sh
curl -s "https://api.hackerone.com/v1/hackers/programs/{handle}" -X GET -u "<username>:<apikey>" -H 'Accept: application/json' \
  | jq -r '.relationships.structured_scopes.data[] | .attributes | select((.asset_type == "URL") and (.eligible_for_bounty == true) and (.eligible_for_submission == true)) | .asset_identifier' \
  | tee inscopehosts \
  | grep '*.' \
  | unfurl.exe format "%r.%t" \
  | subfinder.exe
```
