import NavbarP from 'components/NavbarP';
import Navbar from './Navbar';
import './styles.css';

export default function Admin() {
  return (
    <>
      <NavbarP />
      <div className="admin-container">
        <Navbar />
        <div className="admin-content">
          <h1>conteudo</h1>
        </div>
      </div>
    </>
  );
}
