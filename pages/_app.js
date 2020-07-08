import 'react-datepicker/dist/react-datepicker.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />)
      <style jsx>
        {`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #6dd2dc52;
          }
          .Body {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #6dd2dc52;
          }
          .Bottom {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #6dd2dc52;
          }
          .Button {
            display: inline-block;
            border-style: outset;
            border-color: whitesmoke;
            padding: 5px;
            margin: 15px 10px 2px 4px;
          }
          .Todostyle {
            color: black;
            font-size: 20px;
            border-style: solid;
            border-color: white;
            border-width: 3px;
            border-radius: 5px;
            background-color: lightskyblue;
            margin: 15px 10px 2px 50px;
            padding: 5px 50px 5px 50px;
            border-color: whitesmoke;
          }
        `}
      </style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
