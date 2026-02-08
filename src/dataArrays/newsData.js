const body1 = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';
const body2 = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. ';
const body3 = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum. ';

function newsItem(id, title, body) {
  return { id: String(id), title, body };
}

export const NewsData = [
  newsItem(1, 'News 1', body1),
  newsItem(2, 'News 2', body2),
  ...Array.from({ length: 100 }, (_, i) => {
    const n = i + 3;
    return newsItem(n, `News ${n}`, [body1, body2, body3][n % 3]);
  }),
];
