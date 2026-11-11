import { useQuery } from '@tanstack/react-query';
import { CategoryService } from "../services/category.service";

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: CategoryService.listAll
  })
}

export function useCategory(id: string) {
  return useQuery({
    queryKey: ['category', id],
    queryFn: () => CategoryService.findOne(id),
    enabled: !!id
  })
}
