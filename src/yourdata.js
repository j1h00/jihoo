// Skills Icons
import htmlIcon from "./assets/html.svg";
import cssIcon from "./assets/css.svg";
import jsIcon from "./assets/javascript.svg";
import vueIcon from "./assets/vue.svg";
import reactIcon from "./assets/react.svg";
import reduxIcon from "./assets/redux.svg";
import nextjsIcon from "./assets/nextjs.svg";
import pythonIcon from "./assets/python.svg";
import pandasIcon from "./assets/pandas.svg";
import djangoIcon from "./assets/django.svg";
import dockerIcon from "./assets/docker.svg";
import gitIcon from "./assets/git.svg";
// import javaIcon from "./assets/java.svg";
// import cIcon from "./assets/c.svg";
// import linuxIcon from "./assets/linux.svg";
// import mysqlIcon from "./assets/mysql.svg";
// import jiraIcon from "./assets/jira.svg";

// Social Icon
import githubIcon from "./assets/github.svg";
import dribbble from "./assets/dribbble.svg";
import velog from "./assets/velog.jpg";
import photo from "./assets/photo0.jpg";
import j1h00 from "./assets/j1h00.jpg";

// images
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "jihoo",
  headerTagline: [
    //Line 1 For Header
    "배움을 즐기는",
    //Line 2 For Header
    "Front-end Web Developer",
    //Line 3 For Header
    "박지후입니다.",
  ],
  //   Header Paragraph
  headerParagraph:
    "프론트엔드 개발을 공부하고 있습니다. 새로운 지식을 습득하는 것을 좋아하며, 꾸준히 성장하는 개발자가 되고 싶습니다.",

  //Contact Email
  contactEmail: "guruboy@snu.ac.kr",
  contactNumber: "010-4159-7223",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "MOOOVIE", //Project Title - Add Your Project Title Here
      para: "추천 기능을 포함한 영화 커뮤니티 웹 서비스 with django & Vue.js", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: project1,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/j1h00/project01_Movie_Community",
    },
    {
      title: "Vote 24", //Project Title - Add Your Project Title Here
      para: "병원 이용객, 그 중에서도 특히 중증 환자를 돌보느라 본인의 몸을 챙기지 못하는 보호자들을 위한 건강 설문 플랫폼. ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: project2,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/j1h00/project02_Survey_for_caregivers",
    },
    {
      title: "portfolio Toy-project", //Project Title - Add Your Project Title Here
      para: "나만의 포트폴리오, JS & CSS animation 을 곁들인", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: j1h00,
      //Project URL - Add Your Project Url Here
      url: "https://j1h00.github.io/portfolio/",
    },
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "안녕하세요. 배움을 즐기는 Front-end Developer 박지후입니다. 새로운 지식을 습득하는 것을 좋아하며 습득이 빠른 편입니다. 또한 문제를 집요하게 파고드는 끈기가 저의 강점이라고 생각합니다. 뛰어난 선배 개발자들로부터 많은 것을 배우고 성장하고 싶습니다. ",
  aboutParaTwo:
    "생명과학부 전공 강의인 '생명과학자를 위한 전산학 개론'을 통해 처음 프로그래밍을 접하게 되었고, 이에 흥미를 느껴 개발 공부를 시작하게 되었습니다. 졸업 후엔 SSAFY(삼성 청년 SW 아카데미) 를 통해 웹 개발을 공부하고 있습니다. 현재는 특히 Vanilla js, React 를 비롯한 프론트엔드 기술을 터득하며 신입 소프트웨어 엔지니어 or 프론트엔드 개발 직무 취업을 준비하고 있습니다. 저에 대한 자세한 정보는 이력서를 참고해주시면 감사하겠습니다.",
  aboutParaThree: "",
  aboutImage: photo,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para: "semantic tag 에 대해 이해하고 있으며, 여러 tag 의 종류와 활용할 수 있는 속성들에 대해 알고 있습니다.",
      color: "#E34F26",
      level: 75,
    },
    {
      img: cssIcon,
      para: "원하는 레이아웃을 구성할 수 있으며, CSS selector, animation, media query 등을 활용할 수 있습니다. 또한 bootstrap, tailwind CSS 라이브러리를 경험해봤습니다.",
      color: "#1572B6",
      level: 75,
    },
    {
      img: jsIcon,
      para: "기본적인 DOM 조작, AJAX 통신, Concurrency model, Callback 함수, variable hoisting 에 대한 이해와, Promise 객체, async & await, Class 등의 javascript ES6 문법에 대해서도 알고 활용할 수 있습니다.",
      color: "#F7DF1E",
      level: 50,
    },
    {
      img: vueIcon,
      para: "Vue의 ViewModel로서의 역할, Vue 인스턴스의 Lifecycle 등 공식 문서에 명시된 필수 지식에 대해 알고 있으며, Vue Router, Vuex 라이브러리를 이해하고 사용할 수 있습니다.",
      color: "#4FC08D",
      level: 75,
    },
    {
      img: reactIcon,
      para: "UI 를 컴포넌트로 계층화하여 구현할 수 있고, React 컴포넌트의 Lifecycle 에 대해 알고 있으며, state & effect hook 을 활용하고 custom hook 을 정의할 수 있습니다. ",
      color: "#61DAFB",
      level: 75,
    },
    {
      img: reduxIcon,
      para: 'Flux architecture & "one-way data flow" 을 이해했습니다. store 와 reducer 를 선언하여 상태관리에 사용할 수 있고, react-redux 와 redux-toolkit 을 경험했습니다. ',
      color: "#764ABC",
      level: 50,
    },
    {
      img: nextjsIcon,
      para: "Next.js 의 getStaticProps 와 getServerSideProps 를 활용하여 Static Site Generation, Server Side Rendering 을 구현하고 서비스를 개발할 수 있습니다.",
      color: "#000000",
      level: 50,
    },
    {
      img: pythonIcon,
      para: 'pygame 라이브러리와 객체 지향 프로그래밍을 통해 간단한 게임을 개발해 본 경험이 있으며, 알고리즘 구현을 통해 문제를 해결할 수 있습니다. 또한 "생물학자를 위한 전산학 개론" 강의에서 유전자 데이터를 분석해 본 경험이 있습니다.',
      color: "#3776AB",
      level: 75,
    },
    {
      img: djangoIcon,
      para: "django REST framework 를 활용할 수 있으며, RESTful API 를 구현할 수 있습니다. User Authentication, 게시글 CRUD 와 같은 기능을 구현할 수 있고, django ORM 으로 원하는 데이터를 불러올 수 있습니다.",
      color: "#092E20",
      level: 50,
    },
    {
      img: pandasIcon,
      para: '새싹(Seoul Software Academy, SeSAC) 의 "공공데이터를 활용한 빅데이터 처리 실무 with Python" 강의를 수료했습니다. 이를 통해 pandas 를 이용한 데이터 분석과 머신러닝을 위한 전처리, 그리고 scikit-learn 라이브러리를 활용한 머신러닝까지 경험했습니다.',
      color: "#150458",
      level: 50,
    },
    {
      img: dockerIcon,
      para: "docker image, container 의 개념을 알고 실행할 수 있습니다. Dockerfile, docker-compose 를 작성할 수 있으며, Next.js, Nginx, Node, MySQL 컨테이너를 구동하여 배포해 본 경험이 있습니다.",
      color: "#2496ED",
      level: 50,
    },
    {
      img: gitIcon,
      para: "Git-flow 브랜치 전략을 도입하여 master, develop, feature 브랜치를 구분하여 관리한 경험이 있고, Jira 연동과 커밋 메세지 컨벤션을 활용하여 팀원들과 협업했습니다. Merge Request 를 통해 팀원들과 서로의 코드를 리뷰하고자 노력했습니다. ",
      color: "#F05032",
      level: 50,
    },
    // {
    //   img: javaIcon,
    //   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //   color: "#F7DF1E",
    //  level: 50,
    // },
    // {
    //   img: cIcon,
    //   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //   color: "#A8B9CC",
    //  level: 50,
    // },
    // {
    //   img: linuxIcon,
    //   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //   color: "#FCC624",
    //  level: 50,
    // },
    // {
    //   img: mysqlIcon,
    //   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //   color: "#4479A1",
    //  level: 50,
    // },

    // {
    //   img: jiraIcon,
    //   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //   color: "#0052CC",
    //  level: 50,
    // },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  educationHeading: "Education",
  educations: [
    {
      icon: "",
      period: "2015.03 ~ 2021.08",
      title: "서울대학교 생명과학부 졸업",
      content: [
        "생명과학자를 위한 전산학개론",
        "생물정보학개론",
        "컴퓨터의 개념 및 실습",
        "프로그래밍 연습",
        "자료구조(청강)",
      ],
    },
    {
      icon: "",
      period: "2020.12 ~ 2021.03",
      title:
        "공공데이터를 활용한 빅데이터 처리 실무 with Python (Seoul Software Academy)",
      content: [
        "pandas 데이터 처리 / 분석",
        "matbplotlib 데이터 시각화",
        "scikit-learn 머신러닝 기초",
        "데이터 분석 / 머신러닝 직무 필수 지식 습득",
      ],
    },
    {
      icon: "",
      period: "2021.07 ~ 현재",
      title: "SSAFY (삼성 청년 SW 아카데미) 에서 공부 중",
      content: [
        "1학기 : python, javasciprt 언어 및 django, Vue.js 웹 프레임워크 교육 수료",
        "2학기 : 웹 개발 프로젝트를 진행 / 기획 및 프론트엔드 개발 담당",
      ],
    },
  ],
  // End Promotion Section -----------------

  //   Contact Section --------------
  // "Let's create your next experience together"
  contactSubHeading:
    "궁금하신 점이나 private github repository 열람은 아래로 연락해주세요!",
  social: [
    // Add Or Remove The Link Accordingly
    {
      img: githubIcon,
      url: "https://github.com/j1h00",
    },
    {
      img: velog,
      url: "https://velog.io/@j1h00",
    },
    {
      img: dribbble,
      url: "https://j1h00.github.io/portfolio/",
    },
  ],

  // End Contact Section ---------------
};

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
