# Kibana Dashboard Screenshot Capture - Scraper 🤖

The purpose of this scraper is to take a screenshot of kibana dashboard. 

## Usage

Inputs: 
URL: expected kibana dashboard URL 

### Case - 1 (when user want response in JSON format)


Sample Input 
```bash
curl --request GET --url 'http://localhost:3000/kibana'
sh runKibanaScraper.sh
```

Sample Output
```json
success-> [{ "type": "success" }]
error-> [{ "type": "error" }]
```


## Steps to Setup

### Tech Stack Setup

Install NodeJs, NPM or PM2

### Project Setup

1. Install dependencies

```bash
npm install
```

2. Run Server

```bash
pm2 start server.js --name 'kibana'
```

```bash
npm start
```

### Docker Setup

1. Build
```bash
docker build -t kibana .
```

2. Run/Start
```bash
docker run -p 3000:3000 kibana
```

You can browse the APIs at <http://localhost:3000>

## Contributors
 - Hariom Vashisth
