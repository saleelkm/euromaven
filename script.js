const scrollingWrapper = document.querySelector('.section4coursesContainer');
let currentScroll = 0; 

function autoScrollLeft() {
    const targetScroll = currentScroll + scrollingWrapper.offsetWidth * 0.94;
    scrollingWrapper.style.scrollBehavior = "smooth"; 
    scrollingWrapper.scrollLeft = targetScroll;
    currentScroll = targetScroll;

    if (scrollingWrapper.scrollLeft >= scrollingWrapper.scrollWidth - scrollingWrapper.offsetWidth) {
        currentScroll = 0; 
        scrollingWrapper.scrollLeft = 0; 
    }
}

setInterval(autoScrollLeft, 5000);

//Course Cards Home Starts Here

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector(".section4coursesContainer");
    const cards = container.querySelectorAll(".section4courseCard");
    const numberOfCards = cards.length;
    const style = window.getComputedStyle(cards[0]);
    const cardWidth = cards[0].offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight);
    const containerWidth = container.offsetWidth;
    const scrollPositions = [];
    let currentScroll = container ? container.scrollLeft : 0;
    const lastScrollPosition = scrollPositions[scrollPositions.length - 1];
    let autoScrollInterval;

    for (let i = 1; i < numberOfCards+1; i++) {
        scrollPositions.push(cardWidth * i);
    }    
    function scrollToNextPosition() {
        if (!container) return;
    
        currentScroll = container.scrollLeft;
    
        for (let i = 0; i < scrollPositions.length; i++) {
          if (currentScroll < scrollPositions[i]) {
            container.scrollTo({
              left: scrollPositions[i],
              behavior: 'smooth'
            });
            break;
          }
        }
      }
    
      function scrollToBeginning() {
        if (!container) return;
    
        container.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      }
      function autoScroll() {
        if (!container) return;
    
        currentScroll = container.scrollLeft;
        const containerWidth = container.offsetWidth;
        const lastScrollPosition = scrollPositions[scrollPositions.length - 1];
    
        if (currentScroll + containerWidth >= lastScrollPosition) {
          scrollToBeginning(); // Call the new function
        } else {
          scrollToNextPosition(); // Call the original function
        }
      }
    
      function startAutoScroll() {
        autoScrollInterval = setInterval(autoScroll, 5000);
      }
    
      function stopAutoScroll() {
        clearInterval(autoScrollInterval);
      }
    
      if (container) {
        container.addEventListener('mouseenter', stopAutoScroll);
        container.addEventListener('mouseleave', startAutoScroll);
    
        startAutoScroll();
      } else {
        console.error("Container not found. Auto-scrolling will not be initialized.");
      }

});

//Course Cards Home Ends here



//Placement logo data
const placementLogos = {
    "sets": [
      {
        "setName": "Set1",
        "images": [
          "assets/images/placements/placement_partner1.png",
          "assets/images/placements/placement_partner2.png",
          "assets/images/placements/placement_partner3.png",
          "assets/images/placements/placement_partner4.png",
          "assets/images/placements/placement_partner5.png",
          "assets/images/placements/placement_partner6.png",
          "assets/images/placements/placement_partner7.png",
          "assets/images/placements/placement_partner8.png",
          "assets/images/placements/placement_partner9.png",
          "assets/images/placements/placement_partner10.png",
          "assets/images/placements/placement_partner11.png",
          "assets/images/placements/placement_partner12.png",
          "assets/images/placements/placement_partner13.png",
          "assets/images/placements/placement_partner14.png",
          "assets/images/placements/placement_partner15.png",
          "assets/images/placements/placement_partner16.png",
          "assets/images/placements/placement_partner17.png",
          "assets/images/placements/placement_partner18.png",
          "assets/images/placements/placement_partner19.png",
          "assets/images/placements/placement_partner20.png",
          "assets/images/placements/placement_partner21.png",
          "assets/images/placements/placement_partner22.png",
          "assets/images/placements/placement_partner23.png",
          "assets/images/placements/placement_partner24.png",
          "assets/images/placements/placement_partner25.png",
          "assets/images/placements/placement_partner26.png",
          "assets/images/placements/placement_partner27.png",
          "assets/images/placements/placement_partner28.png",
          "assets/images/placements/placement_partner29.png",
          "assets/images/placements/placement_partner30.png",
          "assets/images/placements/placement_partner31.png",
          "assets/images/placements/placement_partner32.png",
          "assets/images/placements/placement_partner33.png",
          "assets/images/placements/placement_partner34.png",
          "assets/images/placements/placement_partner35.png",
          "assets/images/placements/placement_partner36.png",
          "assets/images/placements/placement_partner37.png",
          "assets/images/placements/placement_partner38.png"
        ]
      },
      {
        "setName": "Set2",
        "images": [
          "assets/images/placements/placement_partner39.png",
          "assets/images/placements/placement_partner40.png",
          "assets/images/placements/placement_partner41.png",
          "assets/images/placements/placement_partner42.png",
          "assets/images/placements/placement_partner43.png",
          "assets/images/placements/placement_partner44.png",
          "assets/images/placements/placement_partner45.png",
          "assets/images/placements/placement_partner46.png",
          "assets/images/placements/placement_partner47.png",
          "assets/images/placements/placement_partner48.png",
          "assets/images/placements/placement_partner49.png",
          "assets/images/placements/placement_partner50.png",
          "assets/images/placements/placement_partner51.png",
          "assets/images/placements/placement_partner52.png",
          "assets/images/placements/placement_partner53.png",
          "assets/images/placements/placement_partner54.png",
          "assets/images/placements/placement_partner55.png",
          "assets/images/placements/placement_partner56.png",
          "assets/images/placements/placement_partner57.png",
          "assets/images/placements/placement_partner58.png",
          "assets/images/placements/placement_partner59.png",
          "assets/images/placements/placement_partner60.png",
          "assets/images/placements/placement_partner61.png",
          "assets/images/placements/placement_partner62.png",
          "assets/images/placements/placement_partner63.png",
          "assets/images/placements/placement_partner64.png",
          "assets/images/placements/placement_partner65.png",
          "assets/images/placements/placement_partner66.png",
          "assets/images/placements/placement_partner67.png",
          "assets/images/placements/placement_partner68.png",
          "assets/images/placements/placement_partner69.png",
          "assets/images/placements/placement_partner70.png",
          "assets/images/placements/placement_partner71.png",
          "assets/images/placements/placement_partner72.png",
          "assets/images/placements/placement_partner73.png",
          "assets/images/placements/placement_partner74.png",
          "assets/images/placements/placement_partner75.png"
        ]
      }
    ]
  };
  
  // Get the container elements
  const set1Container = document.querySelector('.placementLogoSet1');
  const set2Container = document.querySelector('.placementLogoSet2');
  
  // Function to create and append image elements
  function addImagesToContainer(container, images) {
    images.forEach(imageSrc => {
      const img = document.createElement('img');
      img.src = imageSrc;
      img.alt = 'placement partner of euromaven'; // Add an appropriate alt attribute if needed
      container.appendChild(img);
    });
  }
  
  // Populate the containers with images
  placementLogos.sets.forEach(set => {
    if (set.setName === "Set1") {
      addImagesToContainer(set1Container, set.images);
    } else if (set.setName === "Set2") {
      addImagesToContainer(set2Container, set.images);
    }
  });

  // Courses

  const courseCardsData = {
    "certificate": [
        {
            "title": "bachelor of business administration (BBA)",
            "img": "assets/images/hero.png",
            "eligibility": "for students passed class 12 exam",
            "key_points": [
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
            ],
            "duration": [
                "3 Years", "6 Months"
            ]
        },
        {
            "title": "bachelor of business administration (BBA)",
            "img": "assets/images/hero.png",
            "eligibility": "for students passed class 12 exam",
            "key_points": [
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
            ],
            "duration": [
                "3 Years", "6 Months"
            ]
        },
        {
            "title": "bachelor of business administration (BBA)",
            "img": "assets/images/hero.png",
            "eligibility": "for students passed class 12 exam",
            "key_points": [
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
            ],
            "duration": [
                "3 Years", "6 Months"
            ]
        },
        {
            "title": "bachelor of business administration (BBA)",
            "img": "assets/images/hero.png",
            "eligibility": "for students passed class 12 exam",
            "key_points": [
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
            ],
            "duration": [
                "3 Years", "6 Months"
            ]
        },
        {
            "title": "bachelor of business administration (BBA)",
            "img": "assets/images/hero.png",
            "eligibility": "for students passed class 12 exam",
            "key_points": [
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
            ],
            "duration": [
                "3 Years", "6 Months"
            ]
        }
    ],
    "under_graduate": [
        {
            "title": "bachelor of commerce",
            "img": "assets/images/hero.png",
            "eligibility": "for students passed class 12 exam",
            "key_points": [
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
            ],
            "duration": [
                "3 Years", "6 Months"
            ]
        },
        {
            "title": "bachelor of commerce",
            "img": "assets/images/hero.png",
            "eligibility": "for students passed class 12 exam",
            "key_points": [
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
            ],
            "duration": [
                "3 Years", "6 Months"
            ]
        },
        {
            "title": "bachelor of commerce",
            "img": "assets/images/hero.png",
            "eligibility": "for students passed class 12 exam",
            "key_points": [
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
            ],
            "duration": [
                "3 Years", "6 Months"
            ]
        },
        {
            "title": "bachelor of commerce",
            "img": "assets/images/hero.png",
            "eligibility": "for students passed class 12 exam",
            "key_points": [
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
            ],
            "duration": [
                "3 Years", "6 Months"
            ]
        },
        {
            "title": "bachelor of commerce",
            "img": "assets/images/hero.png",
            "eligibility": "for students passed class 12 exam",
            "key_points": [
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
            ],
            "duration": [
                "3 Years", "6 Months"
            ]
        }
    ],
    "post_graduate": [
        {
            "title": "master of commerce",
            "img": "assets/images/hero.png",
            "eligibility": "for students passed class 12 exam",
            "key_points": [
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
            ],
            "duration": [
                "3 Years", "6 Months"
            ]
        },
        {
            "title": "master of commerce",
            "img": "assets/images/hero.png",
            "eligibility": "for students passed class 12 exam",
            "key_points": [
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
            ],
            "duration": [
                "3 Years", "6 Months"
            ]
        },
        {
            "title": "master of commerce",
            "img": "assets/images/hero.png",
            "eligibility": "for students passed class 12 exam",
            "key_points": [
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
            ],
            "duration": [
                "3 Years", "6 Months"
            ]
        },
        {
            "title": "master of commerce",
            "img": "assets/images/hero.png",
            "eligibility": "for students passed class 12 exam",
            "key_points": [
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
            ],
            "duration": [
                "3 Years", "6 Months"
            ]
        },
        {
            "title": "master of commerce",
            "img": "assets/images/hero.png",
            "eligibility": "for students passed class 12 exam",
            "key_points": [
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
                {
                    "title": "degree certificate",
                    "img": "assets/images/icons/certificate.svg"
                },
            ],
            "duration": [
                "3 Years", "6 Months"
            ]
        }
    ]
  }