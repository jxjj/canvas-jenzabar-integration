import generateCourses from './generateCourses';
import jex from '../services/jex';

describe('generateCourses', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('matches CanvasCSV format', async () => {
    const csv = await generateCourses();
    const firstLine = csv.split('\n')[0];
    expect(firstLine).toMatchInlineSnapshot(`
      "course_id,short_name,long_name,term_id,status,start_date,end_date,blueprint_course_id
      "
    `);
  });

  it('outputs courses in order of start date', async () => {
    jest.spyOn(jex, 'getActiveCourses');
    jex.getActiveCourses.mockResolvedValue([
      {
        id: 'AH-1000-03-W20',
        courseCode: 'AH   1000 03',
        parentCourseCode: 'AH   1000 03',
        term: 'SP',
        year: 2020,
        startDate: '2020-03-03',
        openDate: '2020-03-03',
      },
      {
        id: 'AH-1000-01-W20',
        courseCode: 'AH   1000 01',
        parentCourseCode: 'AH   1000 01',
        term: 'SP',
        year: 2020,
        startDate: '2020-01-01',
        openDate: '2020-01-01',
      },
      {
        id: 'AH-1000-02-W20',
        courseCode: 'AH   1000 02',
        parentCourseCode: 'AH   1000 02',
        term: 'SP',
        year: 2020,
        startDate: '2020-02-02',
        openDate: '2020-02-02',
      },
    ]);

    const csv = await generateCourses({ today: '2020-01-01' });
    expect(csv).toMatchInlineSnapshot(`
      "course_id,short_name,long_name,term_id,status,start_date,end_date,blueprint_course_id
      AH-1000-01-W20,AH-1000-01-W20,,2020-SP,active,2020-01-01,,TEMPLATE-ENHANCEDCOURSE
      AH-1000-02-W20,AH-1000-02-W20,,2020-SP,active,2020-02-02,,TEMPLATE-ENHANCEDCOURSE
      AH-1000-03-W20,AH-1000-03-W20,,2020-SP,active,2020-03-03,,TEMPLATE-ENHANCEDCOURSE"
    `);
  });
});
