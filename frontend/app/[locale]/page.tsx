import { useTranslations } from 'next-intl';

const Root = () => {
  const t = useTranslations('Label');

  return (
    <main>
      <h1 className="heading">
        { t('get-template') }
      </h1>
    </main>
  );
};

export default Root;
