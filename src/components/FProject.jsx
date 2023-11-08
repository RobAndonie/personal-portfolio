import fproject1 from '../assets/fproject1.png';

const featuredProjects = [
  {
    title: 'My Personal Portfolio',
    platform: 'Web',
    description:
      'Experienced in HTML, CSS, JS, TS, React.js, Tailwind CSS, Next.js. Passionate about User Experience, skilled with Figma.',
    image: fproject1,
  },
  {
    title: 'Personality Test App',
    platform: 'Mobile',
    description:
      'Experienced Swift, SwiftUI, UIKit, and Xcode. Also familiar with Kotlin, Java, and AndroidStudio.',
    image: fproject1,
  },
];

function FProject() {
  return (
    <div>
      {featuredProjects.map((project) => (
        <div className="mb-6 flex flex-row">
          <div className="flex w-2/5 flex-col border p-4">
            <div className="flex flex-row items-center gap-4">
              {project.platform === 'Web' ? (
                <span className="material-symbols-outlined text-7xl">
                  computer
                </span>
              ) : (
                <span className="material-symbols-outlined text-7xl">
                  smartphone
                </span>
              )}
              <h2 className="font-variant-small-caps text-3xl font-medium">
                {project.platform + ' Development'}
              </h2>
            </div>
            <div className="font-roboto text-sm">
              <p>{'<p>'}</p>
              <p className="pb-1 pl-4">{project.description}</p>
              <p>{'</p>'}</p>
            </div>
          </div>
          <div
            className="w-3/5 border bg-cover"
            style={{ backgroundImage: `url(${fproject1})` }}
          >
            <div
              className="p-4"
              style={{
                backgroundImage:
                  'linear-gradient(180deg, rgba(28, 28, 28, 0.50) 0%, rgba(28, 28, 28, 0.00) 100%)',
              }}
            >
              <h2 className="font-variant-small-caps text-xl font-medium">
                Featured Project
              </h2>
              <h1 className="font-variant-small-caps text-3xl font-semibold">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FProject;
