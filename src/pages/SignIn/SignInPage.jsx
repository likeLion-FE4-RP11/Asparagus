import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Link } from 'react-router-dom';
import { FormInput } from '@/components';

const initialFormState = {
  email: '',
  password: '',
};

export default function SignInPage() {
  useDocumentTitle('SignInPage');
  return (
    <div>
      <FormInput name="email" type="emaail" label="이메일" />
    </div>
  );
}
