import Text from './text';
import Title from './title';

export type TypographyProps = {
  Text: typeof Text;
  Title: typeof Title;
};

const Typography = {
  Text,
  Title
};

export default Typography;
