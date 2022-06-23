import Head from 'next/head'
import React from 'react'

const Header = (props: any): JSX.Element => {
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui"
          />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="keywords" content="PYO Institute" />
          <meta name="author" content="PYO" />
          <link
            rel="icon"
            href="assets2/images/favicon.ico"
            type="image/x-icon"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="assets2/css/bootstrap/css/bootstrap.min.css"
          />
          <link
            href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="assets2/pages/waves/css/waves.min.css"
            type="text/css"
            media="all"
          />

          <link
            rel="stylesheet"
            href="assets2/pages/waves/css/waves.min.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="assets2/icon/themify-icons/themify-icons.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="assets2/icon/icofont/css/icofont.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="assets2/icon/font-awesome/css/font-awesome.min.css"
          />
          <link rel="stylesheet" type="text/css" href="assets2/css/style.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="assets2/css/jquery.mCustomScrollbar.css"
          />
          <title>PYO Institute Dashboard</title>
        </Head>

        <main className="min-h-screen mx-auto">
          {props.children}
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <div id="root"></div>
          <script
            type="text/javascript"
            src="assets2/js/jquery/jquery.min.js"
          ></script>
          <script
            type="text/javascript"
            src="assets2/js/jquery-ui/jquery-ui.min.js "
          ></script>
          <script
            type="text/javascript"
            src="assets2/js/popper.js/popper.min.js"
          ></script>
          <script
            type="text/javascript"
            src="assets2/js/bootstrap/js/bootstrap.min.js "
          ></script>
          <script
            type="text/javascript"
            src="assets2/pages/widget/excanvas.js "
          ></script>

          <script src="assets2/pages/waves/js/waves.min.js"></script>

          <script
            type="text/javascript"
            src="assets2/js/jquery-slimscroll/jquery.slimscroll.js "
          ></script>

          <script
            type="text/javascript"
            src="assets2/js/modernizr/modernizr.js "
          ></script>

          <script
            type="text/javascript"
            src="assets2/js/SmoothScroll.js"
          ></script>
          <script src="assets2/js/jquery.mCustomScrollbar.concat.min.js "></script>

          <script
            type="text/javascript"
            src="assets2/js/chart.js/Chart.js"
          ></script>

          <script src="https://www.amcharts.com/lib/3/amcharts.js"></script>
          <script src="assets2/pages/widget/amchart/gauge.js"></script>
          <script src="assets2/pages/widget/amchart/serial.js"></script>
          <script src="assets2/pages/widget/amchart/light.js"></script>
          <script src="assets2/pages/widget/amchart/pie.min.js"></script>
          <script src="https://www.amcharts.com/lib/3/plugins/export/export.min.js"></script>

          <script src="assets2/js/pcoded.min.js"></script>
          <script src="assets2/js/vertical-layout.min.js "></script>

          <script type="text/javascript" src="assets2/js/script.js " />
        </main>
      </>
    );
}

export default Header



  