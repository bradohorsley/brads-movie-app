export interface MyPages {
  id: number;
  title: string;
  content: string;
  slug: string;
}
export const PAGES: any = [
  {
    id: '1',
    title: 'home',
    content: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper velit non pulvinar egestas. Nullam sollicitudin laoreet purus sed pellentesque. Cras sit amet metus finibus, suscipit justo quis, ullamcorper lacus. Fusce lorem dui, viverra sit amet neque vitae, semper ultrices sapien. Aliquam erat volutpat. Fusce non finibus nunc. Morbi congue nisl accumsan posuere ultricies.','Phasellus nec pretium libero, ac dictum neque. Fusce facilisis arcu sed tincidunt cursus. Etiam vitae dictum enim, id consectetur odio. Etiam eu dolor congue, mattis tortor in, dignissim sem. Fusce sed nunc id nulla condimentum scelerisque ac scelerisque odio. Morbi blandit, eros sit amet lacinia tristique, justo eros varius dui, sit amet egestas elit risus eu ipsum. Cras vestibulum tincidunt nibh, eu dictum arcu. Donec posuere tincidunt eros vel viverra. Pellentesque ut tellus eu lectus vulputate ullamcorper vel eu elit. Donec scelerisque ligula in enim commodo, sit amet aliquet nisi ullamcorper.'],
    slug: 'index',
  },
  {
    id: '2',
    title: 'Test',
    content: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper velit non pulvinar egestas. Nullam sollicitudin laoreet purus sed pellentesque. Cras sit amet metus finibus, suscipit justo quis, ullamcorper lacus. Fusce lorem dui, viverra sit amet neque vitae, semper ultrices sapien. Aliquam erat volutpat. Fusce non finibus nunc. Morbi congue nisl accumsan posuere ultricies.','Phasellus nec pretium libero, ac dictum neque. Fusce facilisis arcu sed tincidunt cursus. Etiam vitae dictum enim, id consectetur odio. Etiam eu dolor congue, mattis tortor in, dignissim sem. Fusce sed nunc id nulla condimentum scelerisque ac scelerisque odio. Morbi blandit, eros sit amet lacinia tristique, justo eros varius dui, sit amet egestas elit risus eu ipsum. Cras vestibulum tincidunt nibh, eu dictum arcu. Donec posuere tincidunt eros vel viverra. Pellentesque ut tellus eu lectus vulputate ullamcorper vel eu elit. Donec scelerisque ligula in enim commodo, sit amet aliquet nisi ullamcorper.'],
    slug: 'test',
  },
  {
    id: '3',
    title: 'About',
    content: ['This is an app to discover and read about movies'],
    slug: 'about-us',
  },
]