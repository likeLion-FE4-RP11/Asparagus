import DeleteButton from '@/components/Button/DeleteButton';

function App() {
  // const [fileImage, setFileImage] = useState('');
  // const deleteFileImage = () => {};

  return (
    <div className="App">
      <DeleteButton onClick={() => deleteFileImage()}>Delete</DeleteButton>
    </div>
  );
}

export default App;
