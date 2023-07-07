import { useTranslations } from 'next-intl';

const Root = () => {
  const t = useTranslations('Test');

  return (
    <main>
      <h1 className="heading">
        { t('title') }
      </h1>
    </main>
  );
};

export default Root;
