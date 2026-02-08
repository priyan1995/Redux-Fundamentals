const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. ';
const lorem2 = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis. ';
const lorem3 = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias. ';

const titles = [
  'Lorem Ipsum', 'Finibus Bonorum et Malorum', 'occaecati cupiditate non provident',
  'Duis aute irure dolor', 'Cillum dolore eu fugiat', 'Excepteur sint occaecat',
  'Nemo enim ipsam', 'Voluptatem quia voluptas', 'Neque porro quisquam',
  'Temporibus autem quibusdam', 'Itaque earum rerum', 'Nam libero tempore',
  'Cum soluta nobis', 'Et harum quidem', 'Ut aut reiciendis', 'Quis autem vel eum',
  'Sed quia non numquam', 'Nisi ut aliquid ex', 'Maiores alias consequatur',
  'At vero eos et accusamus', 'Similique sunt in culpa', 'Deserunt mollitia animi',
  'Id est laborum et dolorum', 'Fugiat quo voluptas nulla', 'Tempora incidunt ut',
  'Adipisci velit sed', 'Quis nostrum exercitationem', 'Ullam corporis suscipit',
  'Nisi ut aliquid commodi', 'Consequatur aut perferendis', 'Doloribus asperiores',
  'Repellendus temporibus', 'Itaque earum rerum hic', 'Tenetur a sapiente',
  'Delectus ut aut reiciendis', 'Voluptatibus maiores alias', 'Consequatur aut',
  'Nam libero tempore cum', 'Soluta nobis est eligendi', 'Optio cumque nihil',
  'Impedit quo minus id', 'Quod maxime placeat', 'Facere possimus omnis',
  'Voluptas assumenda est', 'Omnis voluptas assumenda', 'Repudiandae sint',
  'Molestiae non recusandae', 'Itaque earum rerum facilis', 'Est et expedita',
  'Distinctio nam libero', 'Tempore cum soluta', 'Nobis est eligendi optio',
  'Cumque nihil impedit', 'Minus id quod maxime', 'Placeat facere possimus',
  'Omnis voluptas nulla', 'Pariatur excepteur sint', 'Occae cati cupiditate',
  'Sunt in culpa qui', 'Officia deserunt mollit', 'Animi id est laborum',
  'Spiritus sanctus', 'Magna aliqua ut enim', 'Ad minim veniam quis',
  'Nostrud exercitation ullamco', 'Laboris nisi ut aliquip', 'Ex ea commodo',
  'Consequat duis aute', 'Irure dolor in', 'Reprehenderit voluptate',
  'Velit esse cillum', 'Dolore fugiat nulla', 'Pariatur excepteur',
  'Sint occaecat cupidatat', 'Non proident sunt', 'Culpa qui officia',
  'Deserunt mollit anim', 'Id est laborum', 'Perspiciatis unde omnis',
  'Iste natus error', 'Sit voluptatem accusantium', 'Doloremque laudantium',
  'Totam rem aperiam', 'Eaque ipsa quae', 'Ab illo inventore',
  'Veritatis et quasi', 'Architecto beatae vitae', 'Dicta sunt explicabo',
  'Nemo enim ipsam voluptatem', 'Quia voluptas sit', 'Aspernatur aut odit',
  'Aut fugit sed quia', 'Consequuntur magni dolores', 'Eos qui ratione',
  'Voluptatem sequi nesciunt', 'Neque porro quisquam est', 'Qui dolorem ipsum',
  'Quia dolor sit amet', 'Consectetur adipisci velit', 'Sed quia non',
  'Numquam eius modi', 'Tempora incidunt ut labore', 'Et dolore magnam',
  'Aliquam quaerat voluptatem', 'Ut enim ad minima', 'Veniam quis nostrum',
  'Exercitationem ullam corporis', 'Suscipit laboriosam nisi', 'Aliquid ex ea',
  'Commodi consequatur', 'Quis autem vel eum', 'Iure reprehenderit',
  'Qui in ea voluptate', 'Velit esse quam', 'Nihil molestiae consequatur',
  'Vel illum qui dolorem', 'Eum fugiat quo', 'Voluptas nulla pariatur',
  'At vero eos', 'Accusamus et iusto', 'Odio dignissimos ducimus',
  'Blanditiis praesentium', 'Voluptatum deleniti atque', 'Corrupti quos',
  'Dolores et quas', 'Molestias excepturi sint', 'Occaecati cupiditate',
  'Non provident similique', 'Sunt in culpa', 'Qui officia deserunt',
];

const bodies = [lorem, lorem2, lorem3];

function post(id, title, body) {
  return { id: String(id), title, body };
}

export const PostsData = [
  post(1, titles[0], 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '),
  post(2, titles[1], 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. '),
  post(3, titles[2], 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. '),
  ...Array.from({ length: 100 }, (_, i) => {
    const n = i + 4;
    return post(n, titles[(n - 1) % titles.length], bodies[n % bodies.length]);
  }),
];
