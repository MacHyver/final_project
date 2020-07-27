import Link from 'next/link';

export default function Back() {
  return (
    <div>
      <Link href="./start">
        <button>Back to Start</button>
      </Link>
      <style jsx>
        {`
          button {
            font-size: 22px;
            color: black;
            text-shadow: 2px 2px #ffffff;
            border-style: solid;
            border-color: white;
            border-width: 3px;
            border-radius: 5px;
            background-color: #51dcfa4f;
            display: inline-block;
            border-style: outset;
            border-color: whitesmoke;
            padding: 8px;
            margin-top: 100px;
            margin-bottom: 40px;
            width: 100%;
            align: center;
          }
        `}
      </style>
    </div>
  );
}
