import { Landing } from '@layouts/index';
import { NotFound } from '@view/landing';

const NotFoundPage = () => {
  return (
    <Landing footer={false}>
      <NotFound />
    </Landing>
  );
};

export default NotFoundPage;
