import { useTranslations } from 'next-intl';

import styles from '#styles/logo.module.scss';
import { Logomark } from '#svgs/logomark';

const Logo = () => {
  const t = useTranslations('Common');

  return (
    <div className={styles.logo}>
      <Logomark className={styles.logo__logomark} />
      <p className={styles.logo__logotype}>{ t('company-name') }</p>
    </div>
  );
};

export { Logo };
