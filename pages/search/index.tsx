import { useRouter } from 'next/router';

export default function Search() {
  const router = useRouter();

  const { q } = router.query;
  console.log(q);

  return (
    <div />
  );
}
