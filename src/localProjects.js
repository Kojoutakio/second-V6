export const localProjects = [
  {
    id: 'project-1',
    Title: 'Featured Video Project',
    Description: 'The first animation to win as favorite animation in the Animation competition of STATE POLYTECHNIC OF CREATIVE MEDIA JAKARTA',
    Link: 'https://example.com/demo1',
    Img: '/video.mp4', 
    TechStack: ['3D Animation', 'Video', 'Compettion'],
    Github: 'https://github.com/Kojoutakio',
    Features: [
      'Win Animation Competition',
      'Goldship',
      'Traditional Animation Competition',
      'Umamusume'
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
    Description: 'I Make this Animation when last year 2025 with my friend,and for backround we try hard for making better backround but beacus our laptop kinda hopless so the backround only have less object.(discalmmer chracter is not my model i just only animate the character)',
    Link: 'https://example.com/demo8',
    Img: 'chrtistmast video.mp4',
    Github: 'https://github.com/Kojoutakio',
    TechStack: ['3D Modeling', 'Environment', 'Visual Enhancement', 'Animation'],
    Features: [
      'Detailed environment design',
      'Improved visual quality',
      'Enhanced textures',
      'Professional Animation'
    ]
  },
  {
    id: 'project-9',
    Title: 'Skeleton Shield meme',
    Description: 'Inpiration from skeleton meme (RRRRRRRAAAAAAAAAAAAAAAAAAAAHHH)',
    Link: 'https://example.com/demo9',
    Img: 'Raaaahhh.mp4',
    Github: 'https://github.com/Kojoutakio',
    TechStack: ['3D Modeling', 'Keyframe', 'Retroscop Animation', 'Frieren'],
    Features: [
      'Retroscop style',
      'Blender',
      'Enhanced textures',
      'Professional Animation'
    ]
  },
  {
    id: 'project-10',
    Title: 'Sybil animation',
    Description: 'Inpiration from meme enought to be your mother 😛',
    Link: 'https://example.com/demo10',
    Img: 'shybill (1).mp4',
    Github: 'https://github.com/Kojoutakio',
    TechStack: ['3D Modeling', 'Smooth Keyframe', 'Meme', 'Compillation'],
    Features: [
      'Smooth Animation',
      'Face Animation',
      'Lips Sync',
      'Professional Animation'
      'Blender'
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
