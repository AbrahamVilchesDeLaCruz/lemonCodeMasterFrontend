import * as viewModel from './project.vm';
import * as apiModel from './api/project.api-model';
import { mockProject } from './api/project.mock-data';
import { mapProjectFromApiToVm } from './project.mapper';

describe('./pods/project/project.mapper', () => {
  it('should return an empty project when project is null', () => {
    // Arrange
    const project: apiModel.Project = null;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return an empty project when project is undefined', () => {
    // Arrange
    const project: apiModel.Project = undefined;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should map project with employees correctly from api to viewmodel', () => {
    // Arrange
    const apiProject: apiModel.Project = mockProject;

    const expectedVmProject: viewModel.Project = {
      ...mockProject,
      employees: mockProject.employees,
    };

    // Act
    const result = mapProjectFromApiToVm(apiProject);

    // Assert
    expect(result).toEqual(expectedVmProject);
  });

  it('should return a project with an empty employees list when no employees are present', () => {
    // Arrange
    const apiProject: apiModel.Project = {
      ...mockProject,
      employees: [],
    };

    const expectedVmProject: viewModel.Project = {
      ...mockProject,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(apiProject);

    // Assert
    expect(result).toEqual(expectedVmProject);
  });
});
