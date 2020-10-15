import generateEnrollAdds from './generateEnrollAdds';
import generateEnrollDrops from './generateEnrollDrops';
import generateUsers from './generateUsers';
import generateSectionsForActiveCourses from './generateSectionsForActiveCourses';
import generateCourseShells from './generateCourseShells';
import generateCourseUpdates from './generateCourseUpdates';
import generateEnrollFaculty from './generateEnrollFaculty';
import generateEnrollFacultySenate from './generateEnrollFacultySenate';
import generateSandboxes from './generateSandboxes';
import generateEnrollSandbox from './generateEnrollSandbox';
import generateCoursesToPublish from './generateCoursesToPublish';

export default {
  enrollAdds: generateEnrollAdds,
  enrollDrops: generateEnrollDrops,
  enrollFaculty: generateEnrollFaculty,
  enrollFacultySenate: generateEnrollFacultySenate,
  enrollSandbox: generateEnrollSandbox,
  users: generateUsers,
  sections: generateSectionsForActiveCourses,
  courseShells: generateCourseShells,
  courseUpdates: generateCourseUpdates,
  courseSandboxes: generateSandboxes,
  coursesToPublish: generateCoursesToPublish,
};
