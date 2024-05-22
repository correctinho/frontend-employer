import { getSingleEmployee } from '@/app/lib/actions';
import SingleEmployee from '@/app/components/employees/singleEmployee/singleEmployee';

const SingleUserPage = async ({ params }: any) => {

  const { id } = params

  const employeeDetails = await getSingleEmployee(id)
  return (
    <SingleEmployee 
      data={employeeDetails.data}
      status={employeeDetails.status}
    />
  );
};

export default SingleUserPage