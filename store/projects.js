export const state = () => ({
  projects: [
    {
      title: 'Stay In The Circle Game',
      class: 'bg1',
      icons: ['fab fa-react ic-react'],
      url: 'https://reverent-fermi-0b8273.netlify.app/',
      description:
        'Desktop game for the browser. Players must move the mouse pointer within the orange circle and stay there until the counter reaches 50.',
      tech: 'JavaScript, ReactJs',
    },
    {
      title: 'Spotify Landing Page',
      class: 'bg1',
      icons: ['fab fa-html5 ic-html5', 'fab fa-css3-alt ic-css3'],
      url: 'https://pedantic-hypatia-6755fe.netlify.app/',
      description:
        'Custom landing page for Spotify designed and created by me.',
      tech: 'HTML5, CSS3',
    },
  ],
})
export const getters = {
  getProjects: (state) => state.projects,
}
