// mtu
import Typography from '@mui/material/Typography';
// mtu

const Paragraphs = [
  {
    paragraph: 'A critical ingredient in the success of hotels is developing and maintaining superior performance from their employees. How is that accomplished? What Human Resource Management (HRM) practices should organizations invest in to acquire and retain great employees?'
  },
  {
    paragraph: 'Some hotels aim to provide superior working conditions for their employees. The idea originated from workplaces – usually in the non-service sector – that emphasized fun and enjoyment as part of work-life balance. By contrast, the service sector, and more specifically hotels, has traditionally not extended these practices to address basic employee needs, such as good working conditions.'
  },
  {
    paragraph: 'Pfeffer (1994) emphasizes that in order to succeed in a global business environment, organizations must make investment in Human Resource Management (HRM) to allow them to acquire employees who possess better skills and capabilities than their competitors. This investment will be to their competitive advantage. Despite this recognition of the importance of employee development, the hospitality industry has historically been dominated by underdeveloped HR practices (Lucas, 2002).'
  },
  {
    paragraph: 'Lucas also points out that ‘the substance of HRM practices does not appear to be designed to foster constructive relations with employees or to represent a managerial approach that enables developing and drawing out the full potential of people, even though employees  may be broadly satisfied with many aspects of their work’ (Lucas, 2002). In addition, or maybe as a result, high employee turnover has been a recurring problem throughout the hospitality industry. Among the many cited reasons are low compensation, inadequate benefits, poor working conditions and compromised employee morale and attitudes (Maroudas et al., 2008).'
  },
  {
    paragraph: 'Ng and Sorensen (2008) demonstrated that when managers provide recognition to employees, motivate employees to work together, and remove obstacles preventing effective performance, employees feel more obligated to stay with the company. This was succinctly summarized by Michel et al. (2013): ‘[P]roviding support to employees gives them the confidence to perform their jobs better and the motivation to stay with the organization.’ Hospitality organizations can therefore enhance employee motivation and retention through the development and improvement of their working conditions. These conditions are inherently linked to the working environment.'
  },
  {
    paragraph: 'While it seems likely that employees’ reactions to their job characteristics could be affected by a predisposition to view their work environment negatively, no evidence exists to support this hypothesis (Spector et al., 2000). However, given the opportunity, many people will find something to complain about in relation to their workplace (Poulston, 2009). There is a strong link between the perceptions of employees and particular factors of their work environment that are separate from the work itself, including company policies, salary and vacations.'
  },
  {
    paragraph: 'Such conditions are particularly troubling for the luxury hotel market, where high-quality service, requiring a sophisticated approach to HRM, is recognized as a critical source of competitive advantage (Maroudas et al., 2008). In a real sense, the services of hotel employees represent their industry (Schneider and Bowen, 1993). This representation has commonly been limited to guest experiences. This suggests that there has been a dichotomy between the guest environment provided in luxury hotels and the working conditions of their employees.'
  },
  {
    paragraph: 'It is therefore essential for hotel management to develop HRM practices that enable them to inspire and retain competent employees. This requires an understanding of what motivates employees at different levels of management and different stages of their careers (Enz and Siguaw, 2000). This implies that it is beneficial for hotel managers to understand what practices are most favorable to increase employee satisfaction and retention.'
  },
  {
    paragraph: 'Herzberg (1966) proposes that people have two major types of needs, the first being extrinsic motivation factors relating to the context in which work is performed, rather than the work itself. These include working conditions and job security. When these factors are unfavorable, job dissatisfaction may result. Significantly, though, just fulfilling these needs does not result in satisfaction, but only in the reduction of dissatisfaction (Maroudas et al., 2008).'
  },
  {
    paragraph: 'Employees also have intrinsic motivation needs or motivators, which include such factors as achievement and recognition. Unlike extrinsic factors, motivator factors may ideally result in job satisfaction (Maroudas et al., 2008). Herzberg’s (1966) theory discusses the need for a ‘balance’ of these two types of needs.'
  },
  {
    paragraph: 'The impact of fun as a motivating factor at work has also been explored. For example, Tews, Michel and Stafford (2013) conducted a study focusing on staff from a chain of themed restaurants in the United States. It was found that fun activities had a favorable impact on performance and manager support for fun had a favorable impact in reducing turnover. Their findings support the view that fun may indeed have a beneficial effect, but the framing of that fun must be carefully aligned with both organizational goals and employee characteristics. ‘Managers must learn how to achieve the delicate balance of allowing employees the freedom to enjoy themselves at work while simultaneously high levels of performance’ (Tews et al., 2013).'
  },
  {
    paragraph: 'Deery (2008) has recommended several actions that can be adopted at the organizational level to retain good staff as well as assist in balancing work and family life. Those particularly appropriate to the hospitality industry include allowing adequate breaks during the working day, staff functions that involve families, and providing health and well-being opportunities.'
  },
]

const Text3 = () => {
  return (
    <>
      <Typography sx={{ mb: 2.5 }}>
        <h3>
          <strong>
            Motivational factors and the hospitality industry
          </strong>
        </h3>
      </Typography>
      {Paragraphs.map((i, index) => {
        return (
          <Typography key={index} sx={{ mb: 1.5 }}> {i.paragraph} </Typography>
        )
      })}
    </>
  );
};

export default Text3;
