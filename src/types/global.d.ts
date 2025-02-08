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
  tags: string[];
  content: string;
}
