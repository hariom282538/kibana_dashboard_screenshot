const puppeteer = require('puppeteer');

exports.capture = async function (req, res) {

    let url = req.query.url || "http://kibana:5601/app/kibana#/dashboard/mydashboard/", res_data;
    const browser = await puppeteer.launch({ headless: true, args: ['--ignore-certificate-errors --enable-features=NetworkService', '--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    const client = await page.target().createCDPSession();
    await client.send('Security.setIgnoreCertificateErrors', { ignore: true });

    // Get the "viewport" of the page, as reported by the page.
    await page.setViewport({ width: 1800, height: 750 })

    try {
        res_data = [{ "type": "success" }];
        await page.authenticate({ username: global.env.KIBANA_USERNAME , password: global.env.KIBANA_PASSWORD }); // wait until page load   
        await page.goto(url, { waitUntil: 'networkidle0' });
        await page.screenshot({ path: "MNTHLY_TREND_DASHBOARD.jpeg" , type: "jpeg", quality: 100,  omitBackground: true, fullPage: true });
        await browser.close();
        res.send(res_data);
    }
    catch (err) {

        console.log("PPTR Error - handled case", err);
        res_data = [{ "type": "error" }];
        await browser.close();
        res.send(res_data);
    }

}; // global function closing

