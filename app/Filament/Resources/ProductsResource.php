<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductsResource\Pages;
use App\Filament\Resources\ProductsResource\RelationManagers;
use App\Models\Products;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProductsResource extends Resource
{
    protected static ?string $model = Products::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Code')
                            ->schema([
                                Forms\Components\TextInput::make('product_name')->label('Name of the product')->required()
                                    ->maxLength(30),
                                // Forms\Components\Select::make('id_categoria_padre')
                                //     ->label('Padre')
                                //     ->options(
                                //         ConfigCategoria::all()->pluck('nombre', 'id')

                                //     ),

                                Forms\Components\TextInput::make('stock')->label('Stock')->required()
                                    ->maxLength(3),
                                Forms\Components\TextInput::make('category')->label('Category')->required()
                                    ->maxLength(30),
                                Forms\Components\TextInput::make('price')->label('Price')->required()
                                    ->numeric(2)
                                    ->maxLength(30),
                                Forms\Components\Group::make()
                                    ->schema([
                                        Forms\Components\Section::make('Descripction & Image')
                                            ->schema([
                                                Forms\Components\TextArea::make('description')->label('Description')
                                                    ->maxLength(50),

                                                FileUpload::make('imagen')->label('ImagenUrl')
                                                    ->disk('local')
                                                    ->directory('public')
                                                    ->image()
                                                    ->maxSize(1024),



                                            ])
                                    ])
                            ])
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->color('warning'),
                Tables\Columns\TextColumn::make('product_name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('description'),
                Tables\Columns\TextColumn::make('category'),
                Tables\Columns\TextColumn::make('stock'),
                Tables\Columns\TextColumn::make('price')
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProducts::route('/create'),
            'edit' => Pages\EditProducts::route('/{record}/edit'),
        ];
    }
}
