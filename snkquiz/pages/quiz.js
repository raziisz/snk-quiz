import React from 'react';
import { useRouter } from 'next/router';

export default function PudimComBatata() {
  const router = useRouter();
  const { name } = router.query;
  return (
    <div>
      Olá {name}
    </div>
  );
}
