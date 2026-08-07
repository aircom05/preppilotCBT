import './PageContainer.css';

const PageContainer = ({ children, size = 'md', className = '' }) => {
  return (
    <main className={`page-container page-container--${size} ${className}`}>
      {children}
    </main>
  );
};

export default PageContainer;
