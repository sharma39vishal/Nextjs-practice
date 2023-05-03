import React, { useState } from 'react';

export default function Home() {
    const [data, setdata] = useState(635);
    return (
      <div>{data}</div>
    )
  }
  