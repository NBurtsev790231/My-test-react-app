import React, { useEffect, useState } from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

import { ImageList } from './components';
import { Preloader } from './styles';


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
    {loading ? (
      <Preloader>
      <ClimbingBoxLoader size={40} color={'#064ba6'} loading={loading}/>
      </Preloader>
    ) : ( 
      <>
      <header>
        <h1>My image list</h1>
      </header>
      <main>
        <section>
        <ImageList />
        </section>
      </main>
      </>
    )}
    </>
  );
}

export default App;
