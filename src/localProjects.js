export const localProjects = [
  {
    id: 'project-1',
    Title: 'Featured Video Project',
    Description: 'Watch our latest project demo in video format',
    Link: 'https://example.com/demo1',
    Img: '/video.mp4', 
    TechStack: ['React', 'Video', 'Interactive'],
    Github: 'https://github.com/Kojoutakio',
    Features: [
      'Interactive video playback',
      'Real-time demo showcase',
      'Responsive design',
      'Modern UI/UX'
    ]
  },
  {
    id: 'project-2', 
    Title: 'Lowpoly Character',
    Description: 'The first character I made using the low poly character style. I am still learning to develop this skill/style with focus on clean geometry and vibrant colors.',
    Link: 'https://example.com/demo2',
    Img: '/card1.png',
    Github: 'https://github.com/Kojoutakio',
    TechStack: ['Blender', '3D Modeling', 'Low Poly'],
    Features: [
      'Low poly modeling technique',
      'Clean geometric shapes',
      'Vibrant color palette',
      'Character design fundamentals'
    ]
  },
  {
    id: 'project-3',
    Title: 'TV Girl', 
    Description: 'I took the reference from the sketch on Pinterest and this is also a low poly character that I made. Disclaimer: this is not skibidi. Inspired by retro TV aesthetics.',
    Link: 'https://example.com/demo3',
    Img: '/card2.png',
    Github: 'https://github.com/Kojoutakio',
    TechStack: ['Blender', '3D Modeling', 'Concept Art'],
    Features: [
      'Reference-based modeling',
      'Retro TV aesthetic',
      'Low poly character design',
      'Creative interpretation'
    ]
  },
  {
    id: 'project-4',
    Title: 'SCP 096 Breach Incident',
    Description: 'This is when the Mobile Task Forces try to stop 096 from causing heavy damage and casualties at the facility [REDACTED]. Dramatic scene recreation.',
    Link: 'https://example.com/demo4', 
    Img: '/card3.jpg',
    Github: 'https://github.com/Kojoutakio',
    TechStack: ['Blender', 'Scene Design', 'Storytelling'],
    Features: [
      'Dramatic scene composition',
      'Storytelling through 3D',
      'Military facility design',
      'Suspenseful atmosphere'
    ]
  },
  {
    id: 'project-5',
    Title: 'Isometric Room Design',
    Description: 'This is my first isometric model that I made, which is very simple. A starting point for isometric architectural visualization.',
    Link: 'https://example.com/demo5',
    Img: '/card4.jpg',
    Github: 'https://github.com/Kojoutakio',
    TechStack: ['Isometric Design', 'Architecture', '3D Modeling'],
    Features: [
      'Isometric projection technique',
      'Architectural visualization',
      'Simple room layout',
      'Clean perspective'
    ]
  },
  {
    id: 'project-6',
    Title: 'Secret Interrogation',
    Description: 'This is when OVERWATCH [O5 Council] interrogated a class D personnel. Dramatic lighting and atmospheric scene design.',
    Link: 'https://example.com/demo6',
    Img: '/card5.jpg',
    Github: 'https://github.com/Kojoutakio',
    TechStack: ['Blender', 'Lighting Design', 'Scene Composition'],
    Features: [
      'Dramatic lighting setup',
      'Atmospheric scene design',
      'Character interaction',
      'Narrative composition'
    ]
  },
  {
    id: 'project-7',
    Title: 'Second Isometric - Cozy Room',
    Description: 'This is my second isometric which has a very comfortable and aesthetic room and has some subtle animations and lighting.',
    Link: 'https://example.com/demo7',
    Img: '/card6.jpg',
    Github: 'https://github.com/Kojoutakio',
    TechStack: ['Isometric Design', 'Animation', 'Lighting'],
    Features: [
      'Improved isometric technique',
      'Cozy interior design',
      'Subtle animations',
      'Enhanced lighting effects'
    ]
  },
  {
    id: 'project-8',
    Title: 'Special Christmast',
    Description: 'Building upon previous isometric work with more detailed environment and improved visual quality.',
    Link: 'https://example.com/demo8',
    Img: 'chrtistmast video.mp4',
    Github: 'https://github.com/Kojoutakio',
    TechStack: ['3D Modeling', 'Environment Design', 'Visual Enhancement'],
    Features: [
      'Detailed environment design',
      'Improved visual quality',
      'Enhanced textures',
      'Professional presentation'
    ]
  },
];

// Helper function to get image path based on project index
export const getProjectImage = (projectIndex) => {
  const localImages = [
    '/card1.png', '/card2.png', '/card3.jpg', '/card4.jpg',
    '/card5.jpg', '/card6.jpg', '/card7.jpg'
  ];
  
  // Ensure we don't go out of bounds
  const imageIndex = Math.min(projectIndex - 1, localImages.length - 1);
  return localImages[imageIndex] || '/Photo.png';
};
