import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './components/Container';
import { ShortenerForm } from './components/ShortenerForm';
import { Redirect } from './components/Redirect';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<ShortenerForm />} />
          <Route path="/:urlCode" element={<Redirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
