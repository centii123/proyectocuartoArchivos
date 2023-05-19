//rfce
import Layouts from '@/app/layouts/layouts';

// http://localhost:3000/parametro/555  imprime: 555

function page({params}) { //parametros id
  return (
    <div>
        < Layouts />
        <div>{params.id}</div>
    </div>
    
  )
}

export default page

/*
import React from 'react';
import Layouts from '@/app/layouts/layouts';

function Page({ params }) { // parámetros id
  return (
    <div>
      <Layouts />
      <div>{params.id}</div>
    </div>
  );
}

export default Page;*/







