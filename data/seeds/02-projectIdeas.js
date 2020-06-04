
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projectIdeas').del()
    .then(function () {
      // Inserts seed entries
      return knex('projectIdeas').insert([
        {
          id: 1, 
          idea: 'A visualized and comprehensive way to show yourself better than a resume',
          project_name: 'Persona resume',
          category_id: 1,
          target_user: 'Job seekers',
          impact: 'Enable job seekers to find selling points in their background and experience',
          human_resources: 'Software engineers, product manager, designers, visualizers',
          join_count: 0,
          description: 'Resume is an important way but sometimes we feel like it can not speak most of yourself',
          upvote: 0
        },
        {
          id: 2, 
          idea: 'A better interface and a more valuable community than Craiglist',
          project_name: 'Sharee',
          category_id: 2,
          target_user: 'residents, entrepreneurs',
          impact: 'Connect people who have resources with others who are in need, relocate resources in society',
          human_resources: 'Software engineers, product manager',
          join_count: 0,
          description: "Craiglist is popular but just an advertising site rather a community I think. Why don't we connect people with better interface and experience?",
          upvote: 0
        },
        {
          id: 3, 
          idea: 'Facebook for bravers',
          project_name: 'Bravebook',
          category_id: 1,
          target_user: 'People who are striving for something',
          impact: 'Inspire people through tough journeys that lead to success',
          human_resources: 'Software engineers, data engineers, product manager, designers',
          join_count: 0,
          description: 'We already have a community to show off like Facebook, now we need a community to inspire others to keep making effort toward their goals',
          upvote: 0
        },
        {
          id: 4, 
          idea: 'Youtube for kids',
          project_name: 'Kitube',
          category_id: 1,
          target_user: 'kids, parents',
          impact: 'Give kids proper options for youtube',
          human_resources: 'Software engineers, DevOps, product manager',
          join_count: 0,
          description: "Not every content should be shown to kids, why don't we create a different site for it",
          upvote: 0
        },
        {
          id: 5, 
          idea: 'Matching learners + video conferencing = practice English speaking',
          project_name: 'SpEak',
          category_id: 1,
          target_user: 'students who are practice English speaking skill',
          impact: 'Connect beginners with advancers and natives for them to practice speaking',
          human_resources: 'Software engineers, DevOps, product manager',
          join_count: 0,
          description: 'The most motivated way to learn something is to have a buddy who is studying like you. And specifically about learning English, practice makes perfect.',
          upvote: 0
        },
        {
          id: 6, 
          idea: '',
          project_name: '',
          category_id: 1,
          target_user: '',
          impact: '',
          human_resources: '',
          join_count: 0,
          description: '',
          upvote: 0
        },
        {
          id: 7, 
          idea: "Ecommerce platform for farmers' products",
          project_name: 'Good price',
          category_id: 1,
          target_user: 'farmers',
          impact: 'Help farmers to promote their products directly',
          human_resources: 'Software Engineers, Product Manager, Marketing',
          join_count: 0,
          description: '',
          upvote: 0
        },
        {
          id: 8, 
          idea: "Virtual book library",
          project_name: 'BookSwap',
          category_id: 1,
          target_user: 'Book lovers ',
          impact: 'Cost and effort saving',
          human_resources: 'Software Engineers, Product Manager, Marketing',
          join_count: 0,
          description: '',
          upvote: 0
        },
        {
          id: 9, 
          idea: "Find tourguides who are locals",
          project_name: 'Local',
          category_id: 1,
          target_user: 'local and tourists',
          impact: 'Empower locals to be tourguides and deliver most unique experiences',
          human_resources: 'Software engineers, product manager, designers, tour agent experience, travelers',
          join_count: 0,
          description: '',
          upvote: 0
        },
        {
          id: 10, 
          idea: "Toys that help people to stay calm and be more patient",
          project_name: 'Calm doll',
          category_id: 2,
          target_user: 'People who are impatient',
          impact: 'More patient, better decision',
          human_resources: 'Engineers',
          join_count: 0,
          description: '',
          upvote: 0
        },
        {
          id: 11, 
          idea: "Help kids who don't know English learn programming",
          project_name: 'CodeDespite',
          category_id: 4,
          target_user: 'Kids 7-15 yrs',
          impact: 'Remove English as a barrier and get kids exposed to English earlier',
          human_resources: 'Software Engineers, Product Manager, Marketing',
          join_count: 0,
          description: '',
          upvote: 0
        },
        {
          id: 12, 
          idea: "A school that kids can come to play instead of studying",
          project_name: 'Play school',
          category_id: 4,
          target_user: 'Kids 7-15 yrs and their parents',
          impact: 'Learning by playing',
          human_resources: 'Engineers, Educators',
          join_count: 0,
          description: '',
          upvote: 0
        },
        {
          id: 13, 
          idea: "Tips for parents to raise children",
          project_name: 'Good kids',
          category_id: 3,
          target_user: 'Parents, especially newly weds',
          impact: 'Better parenting',
          human_resources: 'software engineer, UX',
          join_count: 0,
          description: '',
          upvote: 0
        },
        {
          id: 14, 
          idea: "Coffee shop for the coders",
          project_name: 'Codefee',
          category_id: 3,
          target_user: 'Coders',
          impact: 'Connect coders and something may happen from there',
          human_resources: 'Architects, engineers, coders',
          join_count: 0,
          description: '',
          upvote: 0
        },
      ]);
    });
};
