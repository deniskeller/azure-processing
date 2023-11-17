import { Landing } from '@layouts/index';
import { Registration } from '@view/landing';

const RegistrationPage = () => {
  return (
    <Landing footer={false}>
      <Registration />
    </Landing>
  );
};

export default RegistrationPage;
