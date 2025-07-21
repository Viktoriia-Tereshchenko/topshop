import Container from '../../components/Container/Container';
import UsersList from '../../components/UsersList/UsersList';

export default function UsersPage() {
  return (
    <div className="py-[120px] bg-[#f5f4fa]">
      <Container>
        <UsersList />
      </Container>
    </div>
  );
}
