import { ApifyClient } from "apify-client";

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const run = await client.actor("serenido/aliexpress-search-reliable").call({
    "searchTerms": [
        "yoga mat"
    ],
    "maxItems": 120,
    "sortBy": "orders",
    "country": "US",
    "minRating": 4.5
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
