export interface Board {
  id: number;
  boardTitle: string;
  kanbanList: KanbanListProps[];
}

export interface KanbanListProps {
  id: number;
  listTitle: string;
  isFixed?: boolean;
  cards: CardProps[];
}

export interface CardProps {
  id: number;
  tags: TagProps[];
  content: string;
}

export interface TagProps {
  name: string;
  color?: string; // #333332
}
