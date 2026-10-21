# AliExpress Search Scraper API

Search AliExpress by keyword or category link and get price, discount, exact order count, rating, Choice and free-shipping flags for every product.

Runs in the cloud on Apify. No servers, no proxy setup, no code to maintain. **[Open it on Apify](https://apify.com/serenido/aliexpress-search-reliable)**

**Price:** $0.25 per 1,000 products, plus $0.00005 per run. No monthly fee. Apify's free plan gives $5 of usage every month, no credit card needed. [Current price](https://apify.com/serenido/aliexpress-search-reliable/pricing).

## What you get

- Price, old price, discount and currency (24 ship-to countries)
- Exact order count (6,005, not just "5,000+ sold")
- Rating, ships-from country and delivery estimate
- AliExpress Choice, free shipping, sponsored and new-shopper flags
- Filters: price range, minimum orders, minimum rating, free shipping only, Choice only

## Quick start: Python

```bash
pip install apify-client
```

```python
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")

run = client.actor("serenido/aliexpress-search-reliable").call(run_input={
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
```

## Quick start: JavaScript (Node.js)

```bash
npm install apify-client
```

```javascript
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
```

## Quick start: one HTTP call

Runs the tool and returns the rows in one request. Good for runs under 5 minutes; for bigger runs use the Python or JavaScript example.

```bash
curl -X POST "https://api.apify.com/v2/acts/serenido~aliexpress-search-reliable/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"searchTerms": ["yoga mat"], "maxItems": 120, "sortBy": "orders", "country": "US", "minRating": 4.5}'
```

Get your token in [Apify Console > Settings > API & Integrations](https://console.apify.com/settings/integrations).

## Use it from AI apps (MCP)

Any app that supports remote MCP servers (Claude, ChatGPT, Cursor, VS Code and others) can run this tool for you. Add this server URL: `https://mcp.apify.com?tools=serenido/aliexpress-search-reliable`. Your Apify account connects on first use. Example config for Cursor:

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=serenido/aliexpress-search-reliable"
    }
  }
}
```

## Input example

```json
{
  "searchTerms": [
    "yoga mat"
  ],
  "maxItems": 120,
  "sortBy": "orders",
  "country": "US",
  "minRating": 4.5
}
```

You can also paste AliExpress search or category links instead of keywords. All options are listed on the [input page](https://apify.com/serenido/aliexpress-search-reliable/input-schema).

## Output example (one row)

```json
{
  "searchTerm": "yoga mat",
  "rank": 3,
  "title": "Foldable Yoga Mat Eco Friendly EVA Folding Travel Fitness Exercise Mat",
  "price": 6.39,
  "originalPrice": 14.07,
  "discountPct": 54,
  "currency": "USD",
  "isNewShopperDeal": false,
  "orders": 6005,
  "soldText": "5,000+ sold",
  "rating": 4.9,
  "shipFrom": "CN",
  "isChoice": true,
  "freeShipping": false,
  "isSponsored": false,
  "url": "https://www.aliexpress.com/item/3256807670924601.html"
}
```

Download as JSON, CSV or Excel, or connect to Make, Zapier or n8n.

## Use cases

- Finding best-selling products in a niche
- Comparing prices across countries
- Tracking order counts over time

## More tools by Serenido

- [Weibo Scraper](https://github.com/serenido/weibo-scraper): posts, hot searches, comments and creators. No login.
- [Bilibili Scraper](https://github.com/serenido/bilibili-scraper): videos, comments, danmaku and creators. No login.
- [AliExpress Product Details Scraper](https://github.com/serenido/aliexpress-product-details-scraper): every variant with price and stock, shipping to 89 countries.
- [Australian Supermarket Prices: Coles, Woolworths and ALDI](https://github.com/serenido/coles-woolworths-aldi-scraper): Coles, Woolworths and ALDI in one run, with unit prices.
- [Google Trends Scraper](https://github.com/serenido/google-trends-scraper): interest over time, rising queries, regions and Trending Now.
- [Football xG Scraper](https://github.com/serenido/football-xg-scraper): Understat xG tables, matches, shots, players and lineups.
- [Weibo Hot Search Scraper](https://github.com/serenido/weibo-hot-search): the live 微博热搜 list, changes since your last run, top posts per topic.

## Support

Found a bug or need a field? Open an issue here or on the [Issues tab on Apify](https://apify.com/serenido/aliexpress-search-reliable/issues).

Use it only for public data and follow the website's terms and the laws that apply to you. This project is not affiliated with the websites it reads.
