import './AppLayout.css';
import CourseUpdateModal from '../../components/CourseUpdateModal';

const AppLayout = ({ children }) => {
  return (
    <main className="app-layout">
      {children}
      <CourseUpdateModal />
    </main>
  );
};

export default AppLayout;
