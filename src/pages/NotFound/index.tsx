import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad porro
          ipsam, distinctio consectetur explicabo vel eum, aliquid a, dolores
          suscipit alias nihil assumenda aliquam odio. Animi saepe at laudantium
          nisi.
        </p>
      </Container>
    </MainTemplate>
  );
}
