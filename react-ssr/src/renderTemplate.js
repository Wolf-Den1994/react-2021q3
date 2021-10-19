export const renderTemplate = ({ cssPath, jsPath, content = '' }) =>
  `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/client/${cssPath}"/>

        <title>React SSR by Wolf-Den1994</title>
      </head>
      <body>
        <noscript>
            You need to enable JavaScript to run this app.
        </noscript>
        <div id="root">${content}</div>


        <script src="/client/${jsPath}"></script>
      </body>
    </html>
  `;
