import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

run = client.actor("teegemspod/aliexpress-search-reliable").call(run_input={
    "searchTerms": [
        "yoga mat"
    ],
    "maxItems": 120,
    "sortBy": "orders",
    "country": "US",
    "minRating": 4.5
})

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
